import React from 'react';
import './Achievement.css';

const Achievements = () => {
  return (
    <div>
      <div className="container">
        <div className="sections-wrapper">
          <div className="section">
            <h2 style={{ textAlign: 'center' }}>Achievements</h2>
            <div className="achievements">
              <div className="achievement-item">
                <div className="icon"></div>
                <span className="font-custom">Participated in 5 Seminars</span>
              </div>
              <div className="achievement-item">
                <div className="icon"></div>
                <span className="font-custom">Participated in 10 charity events</span>
              </div>
              <div className="achievement-item">
                <div className="icon"></div>
                <span className="font-custom">Best Organizer</span>
              </div>
              <div className="achievement-item">
                <div className="icon"></div>
                <span className="font-custom">Best Volunteer - 2022</span>
              </div>
              <div className="achievement-item">
                <div className="icon"></div>
                <span className="font-custom">Badge - Bronze</span>
              </div>

            </div>
          </div>

          <div className="section">
            <h2 style={{ textAlign: 'center' }}>Projects Contributed</h2>
            <div className="projects">
              <div className="project-item">
                <div className="icon project-icon"></div>
                <div>
                  <span>Ganitha Saviya Seminars</span>
                  <small>Volunteer</small>
                </div>
              </div>
              <div className="project-item">
                <div className="icon project-icon"></div>
                <div>
                  <span>ReGreen Earth - Colombo</span>
                  <small>Organising Committee</small>
                </div>
              </div>
              <div className="project-item">
                <div className="icon project-icon"></div>
                <div>
                  <span>LearnSteer Seminars</span>
                  <small>Organising Committee</small>
                </div>
              </div>
              <div className="project-item">
                <div className="icon project-icon"></div>
                <div>
                  <span>Sasnaka Awurudu</span>
                  <small>Event Coordinator</small>
                </div>
              </div>
              <div className="project-item">
                <div className="icon project-icon"></div>
                <div>
                  <span>Sisu Madiya</span>
                  <small>Organising Committee</small>
                </div>
              </div>
              <div className="project-item">
                <div className="icon project-icon"></div>
                <div>
                  <span>Lohitha Uthpada - Colombo</span>
                  <small>Organising Committee</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
