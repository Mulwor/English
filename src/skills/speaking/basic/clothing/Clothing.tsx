import { Collapse, Divider } from "antd"
import { columns } from "../../../../data/sample";
import { allClothes, clothes, clothes1, clothes12, clothes15, clothes13, clothes14, clothes2, clothes3, clothes4,  clothes16, clothes17, clothes5 } from "./clothing";
import { Video } from "../../../../components";
import { BasicTable } from "../../../../components";
import { Pagination } from "../../../../components/Pagination";
import { usePaginatedData } from "../../../../hooks/usePaginatedData";
import { CollapseWithAccordion } from "../../../../components/Collapse";

const { Panel } = Collapse;

export const Clothing = () => {
  const { data, currentPage, handlePageChange } = usePaginatedData(clothes2, [
    clothes2, clothes3, clothes4, clothes5, clothes12, 
    clothes13, clothes14, clothes15,  clothes16, clothes17, 
  ]);
   
  const { data: dialogsVideo, currentPage: dialogsVideoPage, handlePageChange: handlePageChangeDialogsVideo } = usePaginatedData(clothes, [
    clothes, clothes1
  ]);

  return (
    <div>
      <Divider>Clothes - одежда</Divider>

      <div className="video">
        <Video videoId="XNhvZtjg2q8" />
        <Video videoId="E47g3P64SYw" />
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
      <Pagination currentPage={currentPage} totalPages={10} onPageChange={handlePageChange} />
    </div>
  )
}
