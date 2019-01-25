import './HashTags.css';
import * as React from 'react';
import { TagCloud } from 'react-tagcloud';
import { data as dataReceive } from '../../__mocks__/reports.json';

dataReceive.map((values, index) => {
console.log(values)
});

const data = [
  { value: "JavaScript", count: 38 },
  { value: "React", count: 30 },
  { value: "Nodejs", count: 28 },
  { value: "Express.js", count: 25 },
  { value: "HTML5", count: 33 },
  { value: "MongoDB", count: 18 },
  { value: "CSS3", count: 20 }
];

export default class HashTags extends React.Component {
  public render() {
    // console.log('data', dataReceive);
    return (
        <TagCloud minSize={12} maxSize={35} tags={data}/>
    );
  }
}
