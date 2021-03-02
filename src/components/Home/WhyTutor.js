import React from 'react';
import Reasons from './Reasons';
import speed from '../../assets/images/speed.svg';
import video from '../../assets/images/video.svg';
import tools from '../../assets/images/tools.svg';
import book from '../../assets/images/book.svg';
import './WhyTutor.css';
import { Card } from 'antd';
const WhyTutor = () => {
  return (
    <div className="whyTutor">
      <div className="whyTutor__contain">
        <h2>Why use Your Tutor?</h2>
        <div className="whyTutor__reasons">
          <div className="whyTutor__row">
            <Card bordered={false} style={{ width: 480 }}>
              <Reasons
                icon={speed}
                heading="Go at your own pace"
                text="Enjoy lifetime access to courses on You tutor’s website and app"
              />
            </Card>
            <Card bordered={false} style={{ width: 480 }}>
              <Reasons
                icon={video}
                heading="On-demand tutoring"
                text="Connect with an online tutor in less than 30
              seconds, 24/7."
              />
            </Card>
          </div>

          <div className="whyTutor__row">
            <Card bordered={false} style={{ width: 480 }}>
              <Reasons
                icon={book}
                heading="Find video courses on almost any topic"
                text="Build your library for your career and personal growth"
              />
            </Card>
            <Card bordered={false} style={{ width: 480 }}>
              <Reasons
                icon={tools}
                heading="All the tools you need"
                text="Our lesson space features a virtual whiteboard, text
              editor, audio/video chat, screensharing and so much
              more."
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTutor;
