import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  GeoJSON,
  MapContainer,
  TileLayer,
  useMap,
} from "react-leaflet";

import {
  Activity,
  Users,
  FolderKanban,
  BriefcaseBusiness,
  X,
  Maximize2,
  RotateCcw,
} from "lucide-react";

import {
  nigeriaStateActivity,
} from "../../data/rhvDashboardData";


/*
|--------------------------------------------------------------------------
| Nigeria state geometry
|--------------------------------------------------------------------------
|
| This dataset contains actual Nigerian state boundaries.
|
| For production:
| Download the file and place it locally:
|
| public/data/nigeria-states.geojson
|
| The repository containing the state GeoJSON:
| qedsoftware/geojson_data
|
*/

const GEOJSON_URL =
  "https://raw.githubusercontent.com/qedsoftware/geojson_data/main/nigeria-states.geojson";


function getStateName(feature) {
  const properties = feature?.properties || {};

  return (
    properties.name ||
    properties.NAME_1 ||
    properties.state ||
    properties.State ||
    properties.admin1Name ||
    properties.shapeName ||
    "Unknown State"
  );
}


/*
|--------------------------------------------------------------------------
| Map controller
|--------------------------------------------------------------------------
*/

function MapController({ resetSignal }) {
  const map = useMap();

  useEffect(() => {
    map.setView(
      [9.082, 8.6753],
      5.6,
      {
        animate: true,
        duration: 0.8,
      }
    );
  }, [resetSignal]);

  return null;
}


export default function NigeriaMap() {
  const [geoData, setGeoData] =
    useState(null);

  const [selectedState, setSelectedState] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  const [resetSignal, setResetSignal] =
    useState(0);

  const [isFullscreen, setIsFullscreen] =
    useState(false);


  /*
  |--------------------------------------------------------------------------
  | Load actual Nigeria GeoJSON
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    let cancelled = false;

    async function loadMap() {
      try {
        setLoading(true);

        const response =
          await fetch(GEOJSON_URL);

        if (!response.ok) {
          throw new Error(
            "Unable to load Nigeria map data."
          );
        }

        const data =
          await response.json();

        if (!cancelled) {
          setGeoData(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadMap();

    return () => {
      cancelled = true;
    };
  }, []);


  /*
  |--------------------------------------------------------------------------
  | Calculate state activity
  |--------------------------------------------------------------------------
  */

  const stateStats = useMemo(() => {
    if (!selectedState) {
      return null;
    }

    return (
      nigeriaStateActivity[selectedState] || {
        members: 0,
        programs: 0,
        cases: 0,
        centers: 0,
        volunteers: 0,
      }
    );
  }, [selectedState]);


  /*
  |--------------------------------------------------------------------------
  | Color states according to member activity
  |--------------------------------------------------------------------------
  */

  function getStateColor(name) {
    const state =
      nigeriaStateActivity[name];

    if (!state) {
      return "#dce7e2";
    }

    if (state.members >= 90) {
      return "#15803d";
    }

    if (state.members >= 60) {
      return "#22c55e";
    }

    if (state.members >= 40) {
      return "#86efac";
    }

    if (state.members >= 30) {
      return "#bbf7d0";
    }

    return "#dcfce7";
  }


  /*
  |--------------------------------------------------------------------------
  | GeoJSON style
  |--------------------------------------------------------------------------
  */

  function styleFeature(feature) {
    const name =
      getStateName(feature);

    const selected =
      selectedState === name;

    return {
      fillColor: getStateColor(name),

      fillOpacity:
        selected
          ? 0.95
          : 0.72,

      color:
        selected
          ? "#064e3b"
          : "#ffffff",

      weight:
        selected
          ? 3
          : 1.2,

      opacity: 1,

      dashArray:
        selected
          ? ""
          : "0",
    };
  }


  /*
  |--------------------------------------------------------------------------
  | State interactions
  |--------------------------------------------------------------------------
  */

  function onEachFeature(
    feature,
    layer
  ) {
    const name =
      getStateName(feature);

    const stats =
      nigeriaStateActivity[name];

    layer.bindTooltip(
      `
        <div style="
          font-family: Inter, sans-serif;
          padding: 3px;
        ">
          <strong>${name}</strong>
          ${
            stats
              ? `<br/>
                 <span style="
                   font-size:11px;
                   color:#64748b;
                 ">
                   ${stats.members} members
                 </span>`
              : ""
          }
        </div>
      `,
      {
        sticky: true,
        direction: "top",
      }
    );


    layer.on({
      mouseover: (event) => {
        event.target.setStyle({
          weight: 3,
          fillOpacity: 1,
          color: "#065f46",
        });

        event.target.bringToFront();
      },

      mouseout: (event) => {
        event.target.setStyle(
          styleFeature(feature)
        );
      },

      click: () => {
        setSelectedState(name);
      },
    });
  }


  /*
  |--------------------------------------------------------------------------
  | Loading
  |--------------------------------------------------------------------------
  */

  if (loading) {
    return (
      <div className="relative flex h-[520px] items-center justify-center overflow-hidden rounded-2xl bg-slate-50">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-emerald-100 border-t-emerald-600" />

          <p className="mt-4 text-sm font-semibold text-slate-700">
            Loading Nigeria map...
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Loading state boundaries and RHV activity
          </p>
        </div>
      </div>
    );
  }


  /*
  |--------------------------------------------------------------------------
  | Error
  |--------------------------------------------------------------------------
  */

  if (error) {
    return (
      <div className="flex h-[520px] items-center justify-center rounded-2xl bg-red-50">
        <div className="max-w-md px-6 text-center">
          <p className="text-sm font-bold text-red-600">
            Map failed to load
          </p>

          <p className="mt-2 text-xs text-slate-500">
            {error}
          </p>

          <button
            onClick={() =>
              window.location.reload()
            }
            className="mt-4 rounded-lg bg-red-500 px-4 py-2 text-xs font-bold text-white"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }


  return (
    <div
      className={`relative overflow-hidden border border-slate-200 bg-[#eef6f1] ${
        isFullscreen
          ? "fixed inset-5 z-[9999] rounded-3xl shadow-2xl"
          : "h-[520px] rounded-2xl"
      }`}
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="absolute left-4 right-4 top-4 z-[500] flex items-start justify-between">
        <div className="rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>

            <span className="text-xs font-bold text-slate-900">
              RHV Nigeria Network
            </span>
          </div>

          <p className="mt-1 text-[10px] text-slate-400">
            Live organizational activity by state
          </p>
        </div>


        <div className="flex gap-2">
          <button
            onClick={() =>
              setResetSignal(
                (value) => value + 1
              )
            }
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/90 text-slate-500 shadow-lg backdrop-blur hover:text-emerald-600"
          >
            <RotateCcw size={15} />
          </button>

          <button
            onClick={() =>
              setIsFullscreen(
                (value) => !value
              )
            }
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/70 bg-white/90 text-slate-500 shadow-lg backdrop-blur hover:text-emerald-600"
          >
            <Maximize2 size={15} />
          </button>
        </div>
      </div>


      {/* =====================================================
          ACTUAL MAP
      ===================================================== */}

      <MapContainer
        center={[
          9.082,
          8.6753,
        ]}
        zoom={5.6}
        minZoom={5}
        maxZoom={8}
        scrollWheelZoom={true}
        zoomControl={true}
        className="h-full w-full"
      >

        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController
          resetSignal={resetSignal}
        />

        {geoData && (
          <GeoJSON
            key={selectedState}
            data={geoData}
            style={styleFeature}
            onEachFeature={onEachFeature}
          />
        )}
      </MapContainer>


      {/* =====================================================
          MAP LEGEND
      ===================================================== */}

      <div className="absolute bottom-4 left-4 z-[500] rounded-2xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-xl">
        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
          Member Density
        </p>

        <div className="mt-3 flex items-center gap-1">
          <span className="h-3 w-5 rounded-l-md bg-[#dcfce7]" />
          <span className="h-3 w-5 bg-[#bbf7d0]" />
          <span className="h-3 w-5 bg-[#86efac]" />
          <span className="h-3 w-5 bg-[#22c55e]" />
          <span className="h-3 w-5 rounded-r-md bg-[#15803d]" />
        </div>

        <div className="mt-1 flex justify-between text-[8px] text-slate-400">
          <span>Low</span>
          <span>High</span>
        </div>
      </div>


      {/* =====================================================
          SELECTED STATE PANEL
      ===================================================== */}

      {selectedState && (
        <div className="absolute bottom-4 right-4 z-[500] w-[270px] animate-[slideIn_.3s_ease-out] rounded-2xl border border-white/70 bg-white/95 p-5 shadow-2xl backdrop-blur-xl">

          <div className="flex items-start justify-between">
            <div>
              <p className="text-[9px] uppercase tracking-[0.15em] text-slate-400">
                Selected State
              </p>

              <h3 className="mt-1 text-lg font-bold text-slate-900">
                {selectedState}
              </h3>
            </div>

            <button
              onClick={() =>
                setSelectedState(null)
              }
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-100"
            >
              <X size={15} />
            </button>
          </div>


          <div className="mt-4 grid grid-cols-2 gap-2">

            <Metric
              icon={Users}
              label="Members"
              value={stateStats.members}
            />

            <Metric
              icon={BriefcaseBusiness}
              label="Programs"
              value={stateStats.programs}
            />

            <Metric
              icon={FolderKanban}
              label="Cases"
              value={stateStats.cases}
            />

            <Metric
              icon={Activity}
              label="Volunteers"
              value={stateStats.volunteers}
            />

          </div>


          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-2.5 text-[10px] font-bold text-white transition hover:bg-emerald-700">
            Open {selectedState} Dashboard
          </button>

        </div>
      )}

    </div>
  );
}


function Metric({
  icon: Icon,
  label,
  value,
}) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <div className="flex items-center gap-2">
        <Icon
          size={13}
          className="text-emerald-600"
        />

        <span className="text-[9px] text-slate-400">
          {label}
        </span>
      </div>

      <p className="mt-1 text-lg font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}