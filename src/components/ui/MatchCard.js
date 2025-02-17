import '../../styles/ui/MatchCard.css';
const MatchCard = ({ image, team1, team2, date, venue, price, bookingLink }) => {
    return (
      <div className="card rounded anim" style={{width: "18rem"}}>
        <img src={image} className="card-img-top rounded" alt={`${team1} vs ${team2}`}/>
        <div className="card-body">
          <h5 className="card-title">{`${team1} vs ${team2}`}</h5>
          <h3 className="card-text">{date}</h3>
          <p className="card-title">📍 {venue}</p>
          <h4 className="card-title">₹{price} Onwards</h4>
          <a href={bookingLink} className="btn btn-primary">Book Now</a>
        </div>
      </div>
    );
  };

  export default MatchCard;