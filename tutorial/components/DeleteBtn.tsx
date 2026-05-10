import { deleteUser, removeUser } from "@/utils/actions";
function DeleteBtn({ id }: { id: string }) {
  const removeUserWithId = removeUser.bind(null, id);
  return (
    <form action={removeUserWithId}>
      <input type="hidden" name="name" value="random" />
      <button
        type="submit"
        className="bg-red-400 text-white text-xs rounded p-2"
      >
        delete
      </button>
    </form>
  );
}

export default DeleteBtn;
