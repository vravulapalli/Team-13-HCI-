//@ts-nocheck
import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { Mic, Stop, Replay } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { FcVoicePresentation } from "react-icons/fc";

export default function VoiceToText({
  setOpen = () => {},
  setSearchQuery = () => {},
  handleSearchButtonClick = () => {},
}) {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [editingText, setEditingText] = useState(false);
  const [command, setCommand] = useState("");

  useEffect(() => {
    setCommand(() => transcript);
  }, [transcript]);

  useEffect(() => {
    SpeechRecognition.startListening();
  }, [])

  const handleContinueClick = () => {
    setOpen(() => false);
    setSearchQuery(() => command);
    handleSearchButtonClick(command);
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn&apos;t support speech recognition.</span>;
  }

  return (
    <div className="w-full sm:min-w-[40rem] ">
      <div className="flex items-center justify-between px-5 py-2 border-b">
        <div className="flex items-center gap-4 text-lg font-semibold text-gray-700">
          <FcVoicePresentation className="w-7 h-7"/> Voice Search
        </div>
        <IconButton className="!text-xl" onClick={() => setOpen(false)}>
          <CloseRoundedIcon />
        </IconButton>
      </div>

      <div className="p-6 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4 items-center py-5 justify-center">
          <div className="text-lg text-gray-700">
            Microphone: {listening ? "on" : "off"}
          </div>
          <div className="flex gap-4">
            {listening ? (
              <IconButton
                color="error"
                className="!text-7xl"
                onClick={SpeechRecognition.stopListening}
              >
                <Stop fontSize="inherit" />
              </IconButton>
            ) : (
              <IconButton
                color="primary"
                className="!text-7xl"
                onClick={SpeechRecognition.startListening}
              >
                <Mic fontSize="inherit" />
              </IconButton>
            )}
            {transcript && (
              <IconButton onClick={resetTranscript}>
                <Replay />
              </IconButton>
            )}
          </div>
          {editingText ? (
            <div className="flex gap-4 items-center">
              <TextField
                fullWidth
                variant="standard"
                value={command}
                className="!min-w-[20rem]"
                onChange={(e) => setCommand(e.target.value)}
              />

              <IconButton onClick={() => setEditingText(false)}>
                <CheckRoundedIcon />
              </IconButton>
            </div>
          ) : (
            command && (
              <div className="flex gap-4 items-center">
                <div className="text-gray-500">{command}</div>
                <IconButton onClick={() => setEditingText(true)}>
                  <EditRoundedIcon />
                </IconButton>
              </div>
            )
          )}
        </div>

        <div className="flex gap-4 justify-end w-full">
          {/* <Button
            color="error"
            variant="contained"
            disabled={!command}
            className="!normal-case"
            onClick={resetTranscript}
          >
            Reset
          </Button> */}

          <Button
            variant="contained"
            disabled={!command}
            className="!normal-case !rounded-full"
            onClick={handleContinueClick}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
