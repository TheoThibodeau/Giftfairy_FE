import React from "react";
import { promptMessages } from "../Data and Functions/data";
import TypeWriter from "../typewriter";
import { RingLoader } from "react-spinners";

const PromptDiv = ({ activeElement, isLoading, authCurrentUser, isGenerated, gifteeName }) => {
    return (
        <>
        {/* While going through selections and before making it to the generate page, show this 
              version of the "prompt-div" div */}
              {activeElement !== "generate" && (
                <div className="prompt-div">
                  {/* Christian Dezha - 12/12/2023 */}
                  <TypeWriter text={promptMessages[activeElement]} />
                  {activeElement !== "generate" && activeElement !== "gifteeName" ? (
                    activeElement !== "giftType" && activeElement !== "interests" ? (
                      <p>(Select One Option)</p>
                    ) : (
                      <p>(Select Multiple Options)</p>
                    )
                  ) : (
                    <p>(Optional)</p>
                  )}
                </div>
              )}
        
              {activeElement == "generate" && authCurrentUser && !isGenerated && (
                <div className="prompt-div">
                  {!isLoading && (
                    <p className="openaiDescrip">
                      {gifteeName === "No name selected"
                        ? `Press 'Generate' to see 10 gift ideas that I think your giftee would love!`
                        : `Press 'Generate' to see 10 gift ideas that I think ${gifteeName} would love!`}
                    </p>
                  )}
                  {isLoading ? (
                    <RingLoader color="black" />
                  ) : (
                    <TypeWriter text={promptMessages[activeElement]} />
                  )}
                </div>
              )}
            </>
    )
}

export default PromptDiv;