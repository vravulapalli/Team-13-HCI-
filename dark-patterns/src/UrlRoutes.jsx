import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import HeaderFooterLayout from "./HeaderFooterLayout";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import axios from "axios";

export default function Url_Routes() {
  const { company_branding } = useSelector((state) => state.data);

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.clear();
        window.location.reload();
        
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );

  const theme = createTheme({
    palette: {
      primary: {
        main: company_branding?.button_style?.background_color ?? "#167800", // #181E7F
        contrastText: company_branding?.button_style?.text_color ?? "#FFF",
      },
      // mode: 'dark',
    },
    typography: {
      allVariants: {
        fontFamily: company_branding?.font_family?.font_family ?? "Inter",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderFooterLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<>About</>} />
            <Route path="settings" element={<>Settings</>} />
            <Route path="profile" element={<>Profile</>} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
