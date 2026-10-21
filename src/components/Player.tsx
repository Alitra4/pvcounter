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
        </div>
    )
};



export default PlayerCard;