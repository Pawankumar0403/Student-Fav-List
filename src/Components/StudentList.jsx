function StudentList(props) {

    var studentarr = props.students;
    var favstu = props.favstu
    var setfavstu = props.setfavstu
    var disabledButtons=props.disabledButtons
    var setDisabledButtons=props.setDisabledButtons


    function handleFav(faved) {
        if (!favstu.includes(faved)) {
            setfavstu([...favstu, faved]);
            setDisabledButtons(prevState => ({ ...prevState, [faved]: true }));
        }
    }

    return (
        <>
            <ol className="m-5 w-72">
                {studentarr.map((item, index) => (
                    <li key={index} className="my-3 flex items-center justify-between">
                        <span>{index + 1}. {item}</span>
                        <button
                            className={`p-1 rounded-xl ${disabledButtons[item] ? 'bg-gray-500 text-white' : 'bg-black text-white'}`}
                            onClick={() => handleFav(item)}
                            disabled={disabledButtons[item]}>Add to Favourite</button>
                    </li>
                ))}
            </ol>
        </>
    );
}


export default StudentList;
