import { Link } from "react-router-dom";

export default function Footer() {
  const ScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="flex flex-col bottom-0">
      <div
        onClick={ScrollToTop}
        className="flex justify-center h-12 z-40 text-white text-sm bg-fblue cursor-pointer hover:bg-lfblue"
      >
        <p className="mt-4">Back to top</p>
      </div>
      <div className="flex justify-center gap-32 h-80 z-40 text-white bg-lblue">
        <p className="mt-10">Get to know us</p>
        <p className="mt-10">Amazon-clone payment methods</p>
        <p className="mt-10">Let us help You</p>
      </div>
      <div className="flex justify-center h-28 z-40 text-white border-t border-solid border-dgray bg-lblue">
        <Link to="/">
          <img
            onClick={ScrollToTop}
            className="object-contain w-12 mt-10 lg:w-20"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
      </div>
      <div className="flex justify-center h-28 z-40 bg-blue">
        <p className="mt-16 text-white text-sm">
          &copy; {new Date().getFullYear()}, Amazon-clone
        </p>
      </div>
    </div>
  );
}
