import * as React from 'react';
import './MoodItem.css';
import { Mood as MoodType } from '../services/api/Mood';

interface MoodItemProps {
  selected: boolean;
  icon: any;
  select: () => void;
}

interface MoodItemState {
  selectedMood: MoodType
}

class MoodItem extends React.Component<MoodItemProps, MoodItemState> {
  public render() {
    const { icon, select, selected } = this.props;
    return (
      <div className={`MoodItem ${selected ? 'selected' : '' }`} onClick={select}>
        <img src={icon} alt="Mood icon" />
      </div>
    );
  }
}

export default MoodItem;
