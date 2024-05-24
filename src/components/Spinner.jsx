import { Box } from "@chakra-ui/react";

const Spinner = () => {
  return (
    <Box
      sx={{
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "conic-gradient(#0000 10%,#474bff)",
        WebkitMask: "radial-gradient(farthest-side,#0000 calc(100% - 9px),#000 0)",
        animation: "spinner-zp9dbg 1s infinite linear",
        "@keyframes spinner-zp9dbg": {
          to: {
            transform: "rotate(1turn)",
          },
        },
      }}
    />
  );
};

export default Spinner;