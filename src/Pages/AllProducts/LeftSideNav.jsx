import React from 'react';

const LeftSideNav = () => {
    return (
        <div >
            <div className='my-5 shadow-xl'>
                <h2 className="collapse-title text-xl font-medium">Price Range</h2>
                <div className="divider"></div>
                <input type="range" min="0" max="100" value="40" className="range" />
            </div>

            <div className="collapse mt-5">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium border mx-2">
                    Availability
                </div>
                <div className="collapse-content form-control ">
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>In Stock</span>
                    </label>
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>In Stock</span>
                    </label>
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>In Stock</span>
                    </label>
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>In Stock</span>
                    </label>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium border mx-2">
                    Processor Type
                </div>
                <div className="collapse-content form-control ">
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>Intel</span>
                    </label>
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>AMD</span>
                    </label>
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>Apple</span>
                    </label>
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>Microsoft</span>
                    </label>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium border mx-2">
                    Processor Model
                </div>
                <div className="collapse-content form-control ">
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>Intel CDC</span>
                    </label>
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>Intel PQC</span>
                    </label>
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>Intel Core i3</span>
                    </label>
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>AMD Athlon</span>
                    </label>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium border mx-2">
                    Generation/Series
                </div>
                <div className="collapse-content form-control ">
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>In Stock</span>
                    </label>
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>In Stock</span>
                    </label>
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>In Stock</span>
                    </label>
                    <label className="cursor-pointer flex gap-2 my-2 hover:bg-slate-300">
                        <input type="checkbox" className="checkbox rounded-none" />
                        <span>In Stock</span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;