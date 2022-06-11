import React, {useContext} from "react"
import {Context} from "../Context"

export default function Table() {
    const {formData, marchType} = useContext(Context)

  return (
    <div className="tab">
        <table>
        <tr className="tab-head">
          <th>Team 1</th>
          <th>Team 2</th>
          <th>March Type</th>
          <th>Tournament Name</th>
          <th>Start date & Time</th>
          <th>End date & Time</th>
          <th>Location</th>
          <th>Comments</th>
        </tr>
        <tr className="tab-body">
          <td>{formData.teamOneName} ({formData.teamOnePosition})</td>
          <td>{formData.teamTwoName} ({formData.teamTwoPosition})</td>
          <td>{marchType}</td>
          <td>{formData.tournamentName}</td>
          <td>{formData.startDateAndTime}</td>
          <td>{formData.endDateAndTime}</td>
          <td>{formData.matchLocation}</td>
          <td>{formData.comments}</td>

        </tr>
      </table>
    </div>
  )
}
