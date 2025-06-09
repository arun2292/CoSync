import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
import {
  Button,
  IconButton,
  TextField,
  Typography,
  Box,
  Grid,
  Snackbar,
  Alert,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";

function HomeComponent() {
  const navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");
  const { addToUserHistory } = useContext(AuthContext);

  // Generate a unique meeting code
  const [createdLink, setCreatedLink] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [isJoining, setIsJoining] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const generateMeetingCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase(); // e.g., 4F7G2A
  };

  //   const handleCreateMeeting = async () => {
  //   const newCode = generateMeetingCode();
  //   const meetingLink = `${window.location.origin}/${newCode}`;
  //   setMeetingCode(newCode);
  //   setCreatedLink(meetingLink); // Set link for copy button
  //   await addToUserHistory(newCode);
  //   navigate(`/${newCode}`);
  // };
  const handleCreateMeeting = () => {
    const newCode = generateMeetingCode();
    const meetingLink = `${window.location.origin}/${newCode}`;
    setMeetingCode(newCode);
    setCreatedLink(meetingLink);
    setIsCreating(true); // Now waiting for user to click "Go to Meeting"
  };

  // const handleJoinVideoCall = async () => {
  //   if (!meetingCode.trim()) return;
  //   // await addToUserHistory(meetingCode);
  //   // navigate(`/${meetingCode}`);
  //   await addToUserHistory(meetingCode.trim());
  //   navigate(`/${meetingCode.trim()}`);
  // };
  const handleJoinVideoCall = () => {
    if (!meetingCode.trim()) return;
    setIsJoining(true); // Wait for user to confirm
  };

  return (
    <>
      {/* Navigation Bar */}
      <Box
        className="navBar"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={4}
        py={2}
        boxShadow={2}
      >
        <Typography variant="h5" fontWeight="bold" color="#396aff">
          CoSync
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton onClick={() => navigate("/history")} color="primary">
            <RestoreIcon />
          </IconButton>
          {/* <Typography>History</Typography> */}
          <Button
            variant="outlined"
            gap={2}
            color="error"
            onClick={() => {
              localStorage.removeItem("token");
              // navigate("/auth");
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Grid
        container
        className="meetContainer"
        sx={{ height: "calc(100vh - 80px)", padding: 4 }}
      >
        <Grid item xs={12} md={6} display="flex" alignItems="center">
          <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Providing High-Quality Video Calls <br /> Feel Just Like In-Person
              Meeting
            </Typography>

            <Box
              mt={4}
              display="flex"
              gap={2}
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <TextField
                fullWidth
                variant="outlined"
                label="Enter Meeting Code"
                value={meetingCode}
                onChange={(e) => setMeetingCode(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleJoinVideoCall}
              >
                Join
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={handleCreateMeeting}
              >
                Create
              </Button>
            </Box>

            {isCreating && createdLink && (
              <Box mt={2} display="flex" flexDirection="column" gap={1}>
                <Typography variant="body2" sx={{ wordBreak: "break-word" }}>
                  Meeting created: <strong>{createdLink}</strong>
                </Typography>
                <Box display="flex" gap={2}>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => {
                      navigator.clipboard.writeText(createdLink);
                      // alert("Meeting link copied to clipboard!");
                      setCopySuccess(true);
                    }}
                  >
                    Copy Link
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={async () => {
                      await addToUserHistory(meetingCode);
                      navigate(`/${meetingCode}`);
                    }}
                  >
                    Go to Meeting
                  </Button>
                </Box>
              </Box>
            )}

            {/* If joining, show Go to Meeting button */}
            {isJoining && meetingCode && (
              <Box mt={2}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={async () => {
                    await addToUserHistory(meetingCode.trim());
                    navigate(`/${meetingCode.trim()}`);
                  }}
                >
                  Go to Meeting
                </Button>
              </Box>
            )}
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ ml: 15 }}
        >
          <img
            src="/logo3.png"
            alt="Illustration"
            style={{ width: "85%", maxWidth: "500px" }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={copySuccess}
        autoHideDuration={1500}
        onClose={() => setCopySuccess(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setCopySuccess(false)}
        >
          Meeting link copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}

export default withAuth(HomeComponent);
