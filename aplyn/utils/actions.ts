'use server';

import prisma from './db';
// import { auth } from '@clerk/nextjs';
import { JobType, CreateAndEditJobType, createAndEditJobSchema } from './types';
import { redirect } from 'next/navigation';
// import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';
import { Prisma } from '@/app/generated/prisma/client';

export async function createJobAction(values: CreateAndEditJobType): Promise<JobType | null> {
    try {
        createAndEditJobSchema.parse(values);
        const job: JobType = await prisma.job.create({
            data: {
                ...values,
                clerkId: 'xxxxxx',
            },
        });
        console.log('job', job);
        return job;
    } catch (error) {
        console.log(error)
        return null;
    }
}


type GetAllJobsActionType = {
    search?: string;
    jobStatus?: string;
    page?: number;
    limit?: number
}
export async function getAllJobsAction({
    search, jobStatus, page = 1, limit = 10
}: GetAllJobsActionType): Promise<{
    jobs: JobType[];
    count: number;
    page: number;
    totalPages: number;
}> {
    //authentication
    const userId = 'xxxxx';
    try {
        let whereClause: Prisma.JobWhereInput = {
            clerkId: userId
        }

        if (search) {
            whereClause = {
                ...whereClause,
                OR: [
                    {
                        position: {
                            contains: search
                        }
                    }, {
                        company: {
                            contains: search
                        }
                    }
                ]

            }
        }

        if (jobStatus && jobStatus !== 'all') {
            whereClause = {
                ...whereClause, status: jobStatus
            }
        }

        const jobs: JobType[] = await prisma.job.findMany({
            where: whereClause,
            orderBy: {
                createdAt: 'desc'
            }

        });
        return { jobs, count: 0, page: 1, totalPages: 0 }
    } catch (err) {
        return {
            jobs: [], count: 0, page: 1, totalPages: 0
        }

    }

}