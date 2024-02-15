import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiSearch } from "react-icons/hi";

export default function Header() {
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

        {/* ----- DATE PEAKER ----- */}
        <div className="headerSearchItem">
          <div id="optionDropDown">1 adult &bull; 2 children &bull; 1 room</div>
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
