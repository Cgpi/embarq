import "./TeamMembers.css";
import member1 from "../../assets/aboutimages/member1.png";
import member2 from "../../assets/aboutimages/memeber2.png";

function TeamMembers() {
  return (
    <section className="team">
      <h2>Team Members</h2>

      <div className="team-grid">
        <div className="team-card">
          <img src={member1} alt="Member 1" />
          <div className="overlay">
            <h3>Kavita Jhunjhunwala</h3>
            <p>Chief Marketing Officer</p>
          </div>
        </div>

        <div className="team-card">
          <img src={member2} alt="Member 2" />
          <div className="overlay">
            <h3>Riddhi Kinkar</h3>
            <p>Marketing</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
