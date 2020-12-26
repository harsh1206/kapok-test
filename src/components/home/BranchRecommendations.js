import React, {Component} from 'react'
import { Link } from "react-router-dom";

const BranchRecommendations = ({ branches }) => {
    console.log(branches);
    return (
        <div>
            <div className="card  z-depth-3 post-summary hi">
                <Link to="/createBranch">
              <div className="grey lighten-3 create-post ">
                <input
                  className=""
                  placeholder="Create a Branch"
                ></input>
              </div>
              </Link>
            </div>
            
            
            {/* <Link to={}> */}
            {
                branches && branches.map((branches) => {
                    return (
                        <Link to={branches.id}>
                            <div className="card  z-depth-3 post-summary">
                            <div className="card-content grey-text text-darken-3">
                                <span className="card-title">
                                    {branches.title}
                                </span>
                            </div>
                            </div>
                        </Link>
                    )
                })
            }
            {/* </Link> */}
            </div>
            
    )
    }

export default BranchRecommendations