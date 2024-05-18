

const Slider = () => {
    return (
        <div className="">
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/j8hw5Q1/tusl1.png" className="w-full h-[500px]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/XWYqJrR/tusl2.png" className="w-full h-[500px]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/yRF4R2w/Shorshe-Ilish.webp" className="w-full h-[500px]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/wQqHqKr/tusl3.png" className="w-full h-[500px]" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Slider;