
const Heading = ({title,description}) => {
    return (
        <div className="text-center p-10 space-y-6">
            <h1 className="text-4xl text-gray-700">{title}</h1>
            <p className="text-gray-600 text-lg">
                {description}
            </p>
        </div>
    );
};

export default Heading;