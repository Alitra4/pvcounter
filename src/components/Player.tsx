interface PlayerProps {
    Player: {
    name : string;
    pv : number;
    }
};

function PlayerCard({Player}: PlayerProps){
    return (
        <div>
            <p>{Player.name}</p>
            <p>{Player.pv}</p>
            {/* <button>reset</button>
            <button>+1</button>
            <button>-1</button>
            <button>+5</button>
            <button>-5</button> */}
        </div>
    )
};



export default PlayerCard;