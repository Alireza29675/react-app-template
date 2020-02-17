import React from "react"
import { RouteComponentProps } from "@reach/router"

import css from "./style.module.scss"

export default class extends React.Component<RouteComponentProps> {
  render() {
    return <div className={css.container}></div>
  }
}
