export default function linkTreePage() {
  return (
    <div className="w-full h-screen bg-blue-200 flex place-items-center	justify-center">
      <div className="container w-80 h-3/4 bg-[#050522] rounded-2xl flex flex-col justify-center place-items-center">
        <div className="Profile-box w-32 h-32 rounded-full  overflow-hidden">
          <img src="https://source.unsplash.com/200x200/?japangirl" alt="my profile" />
        </div>
        <h1 className="mt-5 text-white text-3xl font-bold">💻 Olyzano</h1>
        <h4 className=" mt-2 text-md text-[#d9d5d5]">! Pin #2859</h4>
        <div className="btn-wrapper mt-5 flex flex-col text-white">
          <button className=" ease-in duration-300  w-52 h-10 border-2 border-white rounded-2xl">
            <a href="https://www.instagram.com/kevien.oj/?hl=id" className=" text-xl">
              My Instagram
            </a>
          </button>

          <button className="mt-5 w-52 h-10 border-2 border-white rounded-2xl">
            <a href="https://github.com/Kepin17" className=" text-xl">
              My Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
