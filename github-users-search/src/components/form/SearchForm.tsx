import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { type SubmitEvent } from "react";
import { useState } from "react";

type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};
const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const [text, setText] = useState(userName);

  const handleSearch = (e: SubmitEvent) => {
    e.preventDefault();
    if (text.trim() === "") {
      toast("Enter a valid username");
      return;
    }
    setUserName(text);
  };
  return (
    <form
      className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
      onSubmit={handleSearch}
    >
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        type="text"
        id="search"
        value={text}
        placeholder="Search github users"
        className="grow bg-background"
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchForm;
