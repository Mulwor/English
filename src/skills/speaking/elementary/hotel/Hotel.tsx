import { Divider } from "antd"
import { CollapseWithAccordion } from '../../../../components/Collapse';
import { allHotel, hotel_01, hotel_02, hotel_03, hotel_04, hotel_05, hotel_06, hotel_07, hotel_08, hotel_09, hotel_10 } from "./hotel";
import { columns } from "../../../../data/sample";
import { usePaginatedData } from "../../../../hooks/usePaginatedData";
import { BasicTable, Pagination, Video } from "../../../../components";

export const Hotel = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(hotel_01, [
    hotel_01, hotel_02, hotel_03, hotel_04, hotel_05, 
    hotel_06, hotel_07, hotel_08, hotel_09, hotel_10
  ]);

  return (
    <div>
      <Divider>Hotel</Divider>
      <CollapseWithAccordion text={'Hotel list'} data={allHotel} columns={columns} />

      <div className="video">
        <Video videoId="av9XRDVsbd8" />
        <Video videoId="G1FoU1p1YPI" />
        <Video videoId="0_yzAhXRgRw" />
      </div>

      <Divider>Dialogs</Divider>
      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />
    </div>
  )
}