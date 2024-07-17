function FavStudent(props) {
    var favstu = props.favstu
    var setfavstu = props.setfavstu
    var setDisabledButtons=props.setDisabledButtons

    function handleRemove(removed) {
        const updatedFavstu = favstu.filter(item => item !== removed);
        setfavstu(updatedFavstu);
        setDisabledButtons(prevState => ({ ...prevState, [removed]: false }));
    }

    return (
        <>
            <ol className="m-5 w-64">
                {favstu.map((item, index) => (
                    <li key={index} className="my-3 flex gap-16 items-center justify-between">
                        <span>{index + 1}. {item}</span>
                        <button 
                            className="bg-red-500 text-white p-1 rounded-xl items-center" 
                            onClick={() => handleRemove(item)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        </>
    );
}

export default FavStudent;
