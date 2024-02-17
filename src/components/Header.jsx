import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiMinus, HiPlus, HiSearch } from "react-icons/hi";
import { useRef, useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

export default function Header() {
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className="headerSearch">
        {/* ----- SEARCH PLACES ----- */}
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            type="text"
            placeholder="where to go?"
            className="headerSearchInput"
            name="destination"
            id="destination"
          />
          <span className="seperator"></span>
        </div>

        {/* ----- DATE PEAKER ----- */}
        <div className="headerSearchItem">
          <HiCalendar className="headerIcon dateIcon" />
          <div className="dateDropDown">2023/06/34</div>
          <span className="seperator"></span>
        </div>

        {/* ----- DROP DOWN ----- */}
        <div className="headerSearchItem">
          <div id="optionDropDown" onClick={() => setOpenOptions((is) => !is)}>
            {options.adult} adult &bull; {options.children} children &bull; {options.room}{" "}
            room
          </div>
          {openOptions && (
            <GuestOptionList
              options={options}
              handleOption={handleOption}
              setOpenOptions={setOpenOptions}
            />
          )}
          <span className="seperator"></span>
        </div>

        {/* ----- SEARCH BUTTON ----- */}
        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <HiSearch className="headerIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

function GuestOptionList({ options, handleOption, setOpenOptions }) {
  const optionsRef = useRef();
  useOutsideClick(optionsRef, "optionDropDown", () => setOpenOptions(false));
  return (
    <div className="guestOptions" ref={optionsRef}>
      <OptionItem
        handleOption={handleOption}
        options={options}
        type="adult"
        minLimit={1}
      />
      <OptionItem
        handleOption={handleOption}
        options={options}
        type="children"
        minLimit={0}
      />
      <OptionItem
        handleOption={handleOption}
        options={options}
        type="room"
        minLimit={1}
      />
    </div>
  );
}

function OptionItem({ options, type, minLimit, handleOption }) {
  return (
    <div className="guestOptionItem">
      <span className="optionText">{type}</span>
      <div className="optionCounter">
        <button
          className="optionCounterBtn"
          disabled={options[type] <= minLimit}
          onClick={() => handleOption(type, "dec")}
        >
          <HiMinus className="icon" />
        </button>
        <span className="optionCounterNumber">{options[type]}</span>
        <button className="optionCounterBtn" onClick={() => handleOption(type, "inc")}>
          <HiPlus className="icon" />
        </button>
      </div>
    </div>
  );
}
