import Rating from "../Rating/Rating";
import "./TopProducts.css";

const TopProducts = () => {
    const topProductsList = [
        {
            title: "Shoe",
            url: "https://placeimg.com/400/225/arch",
            colors:['red','cyan','orange'],
            price: 75
        },
        {
            title: "Pant",
            url: "https://placeimg.com/400/225/arch",
            colors:['red','cyan','orange'],
            price: 45
        },
        {
            title: "Shirt",
            url: "https://placeimg.com/400/225/arch",
            colors:['red','cyan','orange'],
            price: 45
        },
        {
            title: "Belt",
            url: "https://placeimg.com/400/225/arch",
            colors:['red','cyan','orange'],
            price: 45
        },
        {
            title: "TShirt",
            url: "https://placeimg.com/400/225/arch",
            colors:['red','cyan','orange'],
            price: 45
        },
    ]
  return (
    <div className="container mx-auto mt-4">

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4">
            {
                topProductsList.map((product,index)=>(
                    <div className="" key={index}>
                        <div className="card bg-base-100 shadow-xl">
                            <figure className="px-4 pt-4">
                            <img
                                src={product.url}
                                alt={product.title}
                                className="rounded-xl"
                            />
                            </figure>
                            <div className="card-body items-center text-center">
                            <h2 className="card-title">{product.title}</h2>
                            <p>${product.price}</p>
                            <Rating value={3.5} />
                            <div className="available-colors -mx-1 mt-1">
                                {
                                    (product.colors)&& product.colors.map((colorvariation,index)=>(
                                        <div className="color-circle mx-1" key={index} style={{backgroundColor: colorvariation}}></div>
                                    ))
                                }
                            </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default TopProducts;
