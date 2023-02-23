export default function Address() {
  return (
    <div className="flex flex-col w-48 h-48 bg-white border border-gray shadow rounded-lg lg:w-80 lg:h-64">
      <div className="px-5 border-b border-gray shadow mt-2">
        <p className="flex text-xs tracking-tight text-black mb-2.5 lg:text-sm">
          Default:
        </p>
      </div>
      <div className="flex flex-col px-5 mt-2">
        <p className="flex text-xs font-bold tracking-tight text-black mb-0.5 lg:text-sm">
          Name Surname
        </p>
        <p className="flex text-xs tracking-tight text-black mb-0.5 lg:text-sm">
          Street 2
        </p>
        <p className="flex text-xs tracking-tight text-black mb-0.5 lg:text-sm">
          City, 12345
        </p>
        <p className="flex text-xs tracking-tight text-black mb-0.5 lg:text-sm">
          Country
        </p>
        <p className="flex text-xs tracking-tight text-black mb-0.5 lg:text-sm">
          Phone number: 1234567893
        </p>
      </div>
      <div className="flex gap-3 px-5 mt-6 lg:mt-10">
        <a
          className="flex text-xs tracking-tight text-lblue mb-2.5 lg:text-sm hover:underline hover:text-red"
          href=""
        >
          Edit
        </a>
        <p className="flex border-r-2 h-4"></p>
        <a
          className="flex text-xs tracking-tight text-lblue mb-2.5 lg:text-sm hover:underline hover:text-red"
          href=""
        >
          Remove
        </a>
      </div>
    </div>
  );
}
