import profilPicture from "../assets/profilPicture.svg";

const People = (props) => {
  const { firstLetter } = props;
  return (
    <div className="rank-people-picture">
      {firstLetter ? (
        <span className="rank-people-letter">{firstLetter}</span>
      ) : (
        <img src={profilPicture} />
      )}
    </div>
  );
};

export default People;
