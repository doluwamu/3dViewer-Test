// import * as OV from "online-3d-viewer";

// import "./index.css";

// window.addEventListener("load", () => {
//   // set the location of the external libraries
//   OV.SetExternalLibLocation("../libs");

//   // get the parent element of the viewer
//   // let mainDiv = document.getElementById("view");
//   let parentDiv = document.getElementById("viewer");

//   // mainDiv.appendChild(parentDiv);

//   console.log(parentDiv);

//   // initialize the viewer with the parent element and some parameters
//   let viewer = new OV.EmbeddedViewer(parentDiv, {
//     camera: new OV.Camera(
//       new OV.Coord3D(50, 30, 50),
//       new OV.Coord3D(30, 50, 30),
//       new OV.Coord3D(50, 30, 50),
//       45.0
//     ),
//     backgroundColor: new OV.RGBAColor(255, 255, 255, 255),
//     defaultColor: new OV.RGBColor(200, 70, 200),
//     edgeSettings: new OV.EdgeSettings(false, new OV.RGBColor(0, 0, 0), 1),
//     environmentSettings: new OV.EnvironmentSettings(
//       [
//         "assets/envmaps/fishermans_bastion/posx.jpg",
//         "assets/envmaps/fishermans_bastion/negx.jpg",
//         "assets/envmaps/fishermans_bastion/posy.jpg",
//         "assets/envmaps/fishermans_bastion/negy.jpg",
//         "assets/envmaps/fishermans_bastion/posz.jpg",
//         "assets/envmaps/fishermans_bastion/negz.jpg",
//       ],
//       false
//     ),
//   });

//   // load a model providing model urls
//   viewer.LoadModelFromUrlList(["model.obj", "model.mtl"]);
// });
