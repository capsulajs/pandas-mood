import * as React from 'react';
import './Mood.css';
import { Mood as MoodType } from '../services/api/Mood';
import mood0 from './img/0.png';
import mood1 from './img/1.png';
import mood2 from './img/2.png';
import mood3 from './img/3.png';
import mood4 from './img/4.png';
import MoodItem from './MoodItem';

interface MoodProps {
  selectMood: (mood: MoodType) => () => void;
  selectedMood: MoodType;
}

interface MoodState {
}

class Mood extends React.Component<MoodProps, MoodState> {

  public render() {
    return (
      <div className="Mood">
        <MoodItem
          selected={this.props.selectedMood === 0}
          icon={mood0}
          color="red"
          select={this.props.selectMood(0)}/>
        <MoodItem
          selected={this.props.selectedMood === 1}
          icon={mood1}
          color="orange"
          select={this.props.selectMood(1)}/>
        <MoodItem
          selected={this.props.selectedMood === 2}
          icon={mood2}
          color="blue"
          select={this.props.selectMood(2)}/>
        <MoodItem
          selected={this.props.selectedMood === 3}
          icon={mood3} color="chocolate"
          select={this.props.selectMood(3)}/>
        <MoodItem
          selected={this.props.selectedMood === 4}
          icon={mood4} color="green"
          select={this.props.selectMood(4)}/>
      </div>
    );
  }
}

export default Mood;
