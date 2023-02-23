export default function Order() {
  return (
    <div className="flex flex-col w-11/12 h-48 bg-white border border-gray rounded-lg lg:w-2/4 lg:h-80">
      <div className="flex px-5 border-b gap-5 border-gray bg-lgray">
        <div className="flex flex-col text-xs tracking-tight text-dgray my-2.5 lg:text-sm">
          ORDER PLACED
          <p>30 January 2023</p>
        </div>
        <div className="flex flex-col text-xs tracking-tight text-dgray my-2.5 lg:text-sm">
          TOTAL
          <p>9.00$</p>
        </div>
        <div className="flex flex-col text-xs tracking-tight text-dgray my-2.5 lg:text-sm">
          DISPATCH TO
          <p>Name Surname</p>
        </div>
      </div>
      <div className="flex flex-col px-5 mt-2">
        <p className="flex text-xs font-bold tracking-tight text-black mb-0.5 lg:text-lg">
          Arriving by 1 March
        </p>
      </div>
    </div>
  );
}
