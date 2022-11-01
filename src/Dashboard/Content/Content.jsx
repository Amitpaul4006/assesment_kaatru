import React from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import "./Content.css";
import one from '../../assests/one.png'
import two from '../../assests/two.png'
import three from '../../assests/three.png'
import four from '../../assests/four.png'
import five from '../../assests/five.png'
import six from '../../assests/six.png'

const Content = () => {
  const OTHER_DETAILS = [one, two, three,four,five,six];
  const options = {
    series: [{
      data: [10, 9, 11, 11, 8, 13, 12, 14]
    },
  ]
  }
  return (
    <div className="content">
      <section className="content-heading">
        <div>
          <p>Welcome back Isabella!</p>
          <h5>Check out today's weatherinformation</h5>
        </div>
        <div className="profile">
          <p class="material-icons more-icon md-36 ">more_horiz</p>
          <div className="avatar"></div>
        </div>
      </section>
      <section className="weather-graph">
        <div className="weather-graph-header">
          <div className="graph-header">
            <h5>Upcomming Hours</h5>
          </div>
          <div className="graph-header-right">
              <div className="rain">
                <h5>Rain perception</h5>
              </div>
              <div className="next">
                <h5>Next Days {">"}</h5>
              </div>
          </div>
          </div>
          <div className="graph-one">
          <HighchartsReact
          highcharts={Highcharts}
          options={options}
          />
        </div>
      </section>
      <h5>More details of today's weather</h5>
      <div className="more-details">
        {OTHER_DETAILS.map((item) => (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img src={item} alt="graph image" className="card"></img>
        ))}
      </div>
    </div>
  );
};

export default Content;
