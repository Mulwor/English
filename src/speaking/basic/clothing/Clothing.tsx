import { Collapse, Divider, Table } from "antd"
import { columns } from "../../../data/sample";
import { allClothes, clothes, clothes1, clothes2, clothes3, clothes4, clothes5, clothes7, clothes8 } from "./clothing";
import { Video } from "../../../components/Video";
import { BasicTable } from "../../../components/Table";
import { Pagination } from "../../../components/Pagination";
import { usePaginatedData } from "../../../hooks/usePaginatedData";
import { CollapseWithAccordion } from "../../../components/Collapse";

const { Panel } = Collapse;

export const Clothing = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(clothes2, [
    clothes2, clothes3, clothes4, clothes5,  clothes7, clothes8
  ]);
   
  const { data: dialogsVideo, currentPage: dialogsVideoPage, handlePageChange: handlePageChangeDialogsVideo } = usePaginatedData(clothes, [
    clothes, clothes1
  ]);

  return (
    <div>
      <Divider>Clothes - одежда</Divider>

      <div className="video">
        <Video videoId="XNhvZtjg2q8" width="410" />
        <Video videoId="E47g3P64SYw" width="410" />
      </div>

      <div className="data">
        <Collapse accordion>
          <Panel header="Dialogs video" key="1">
            <BasicTable data={dialogsVideo} />
            <Pagination currentPage={dialogsVideoPage} totalPages={2} onPageChange={handlePageChangeDialogsVideo} />
          </Panel>
        </Collapse>

        <CollapseWithAccordion text={'Clothing List'} data={allClothes} columns={columns} />
      </div>

      <div className="links">
        <a href="https://test-english.com/listening/a1/what-are-they-wearing-clothes-listening-test/" target="_href">
          1. Услышь во что одет человек
        </a>

        <a href="https://test-english.com/listening/a1/what-are-they-wearing-clothes-listening-test/" target="_href">
          2. Заполни пропуски
        </a>

        <a href="https://test-english.com/listening/a1/what-are-they-wearing-clothes-listening-test/" target="_href">
          3. Hangman - одежда
        </a>
      </div>


      <Divider>Dialogs</Divider>

      <BasicTable data={data} />
      <Pagination currentPage={currentPage} totalPages={6} onPageChange={handlePageChange} />
    </div>
  )
}
