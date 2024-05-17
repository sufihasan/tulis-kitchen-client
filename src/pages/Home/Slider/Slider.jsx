

const Slider = () => {
    return (
        <div className="w-3/4 mx-auto">
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/6HdbDsg/beef-curry.jpg" className="w-full h-[500px]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/7KvpsTr/checken.jpg" className="w-full h-[500px]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/yRF4R2w/Shorshe-Ilish.webp" className="w-full h-[500px]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/F8GGkbB/plane-polaw.webp " className="w-full h-[500px]" />
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