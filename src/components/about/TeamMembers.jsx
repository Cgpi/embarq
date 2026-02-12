import "./TeamMembers.css";
import member1 from "../../assets/aboutimages/member1.png";
import member2 from "../../assets/aboutimages/memeber2.png";

function TeamMembers() {
  return (
    <section className="team">
      <div className="team-container">
        <h2 className="team-title">Team Members</h2>

        <div className="team-grid">
          {/* Card 1 */}
          <div className="team-card">
            <div className="team-image-wrapper">
              <img src={member1} alt="Kavita Jhunjhunwala" />
              <div className="team-overlay">
                <h3>Kavita Jhunjhunwala</h3>
                <p>
                  As a Fractional CMO, Kavita is passionate about solving digital
                  challenges, partnering with growth-stage businesses to craft
                  long-term, data-driven growth strategies while training digital
                  marketing teams.
                </p>
                <span className="read-more">Read More</span>
              </div>
            </div>

            {/* Mobile Content */}
            <div className="team-content">
              <h3>Kavita Jhunjhunwala</h3>
              <p>
                As a Fractional CMO, Kavita is passionate about solving digital
                challenges, partnering with growth-stage businesses to craft
                long-term, data-driven growth strategies while training digital
                marketing teams.
              </p>
              <span className="read-more">Read More</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="team-card">
            <div className="team-image-wrapper">
              <img src={member2} alt="Riddhi Kinkar" />
              <div className="team-overlay">
                <h3>Riddhi Kinkar</h3>
                <p>
                  Riddhi is a calm, witty individual with a keen eye for detail
                  and a passion for unique travel experiences. As a key member of
                  the Embareq team, she thrives on managing customer joy and
                  marketing activities.
                </p>
                <span className="read-more">Read More</span>
              </div>
            </div>

            {/* Mobile Content */}
            <div className="team-content">
              <h3>Riddhi Kinkar</h3>
              <p>
                Riddhi is a calm, witty individual with a keen eye for detail
                and a passion for unique travel experiences. As a key member of
                the Embareq team, she thrives on managing customer joy and
                marketing activities.
              </p>
              <span className="read-more">Read More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;
