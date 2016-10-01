/// <reference path="../../../../../../typings/index.d.ts" />
import * as React from 'react'
var styles = require('./project.css');

export interface Props{
    name: string,
    selected: boolean
}

export class Project extends React.Component<Props, any> {
    handleOnClick(event: React.MouseEvent) {
        console.log("click:"+this.props.name);
    }

    render() {
        var projectStyle = styles.project;
        if (this.props.selected) {
            projectStyle += " ";
            projectStyle += styles.selected;
        }
        return (
            <li className={projectStyle} onClick={(event) => this.handleOnClick(event)}>
                {this.props.name}
            </li>
        )
    }
}
