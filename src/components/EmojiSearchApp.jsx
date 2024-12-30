import { useEffect, useState } from "react";
import emojiData from "../data.json";
const EmojiSearchApp = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const newData = emojiData.filter((emoji) =>
      emoji.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setData(newData);
  }, [search]);
  return (
    <div className="flex justify-center items-center gap-4 flex-col bg-slate-900">
      <h1 className="text-slate-50 text-3xl font-bold my-10" >Emoji Search App</h1>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Search emoji here"
          value={search}
          className="h-12 w-80 rounded-xl text-center"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="mt-10 p-4 bg-slate-800  rounded-lg m-2" >
        {data.map((emoji, id) => {
          return  <button key={id} className="h-10 w-10 rounded-lg m-2 bg-slate-100 ">{emoji.symbol}</button>
          
        })}
      </div>
    </div>
  );
};

export default EmojiSearchApp;
