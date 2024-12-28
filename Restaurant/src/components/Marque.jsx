import Marquee from 'react-fast-marquee';
import Review from './review.json';

function Marque(props) {
  return (
    <>
      <div className="flex space-x-4 mx-24 bg-opacity-100">
        <Marquee autoFill pauseOnClick>
          <div className="flex flex-wrap justify-center gap-4 mt-8 cursor-pointer">
            {Review.map((review, index) => (
              <div
                key={index}
                className="flex flex-col border rounded-xl border-amber-400 h-[14rem] w-[16rem] mx-2 p-4 bg-black shadow-md"
              >
                
                <div className="flex items-center  mb-4 mt-2">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-16 border border-zinc-100 rounded-full w-16 object-cover mr-2"
                  />
                  <div>
                  <div className="text-lg font-semibold text-slate-400">
                    {review.name}
                  </div>
                  <div className="text-sm text-gray-400 mb-2">
                   {review.date}
                </div>
                </div>
                </div>

                
                <div className="text-lg font-semibold text-slate-200 mb-2">
                  Rating: {review.rating}
                </div>

                
                

                
                <div className="text-sm text-gray-400">{review.review}</div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Marque;
