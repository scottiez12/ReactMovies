import axios, { AxiosError, AxiosResponse } from "axios";
import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import customConfirm from "./customConfirm";
import GenericList from "./GenericList";
import Pagination from "./Pagination";
import RecordsPerPageSelect from "./RecordsPerPageSelect";

export default function IndexEntity<T>(props: indexEntityProps<T>) {
  const [entities, setEntities] = useState<T[]>();
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, recordsPerPage]);

  function loadData() {
    axios
      .get(props.url, {
        params: { page, recordsPerPage },
      })
      .then((response: AxiosResponse<T[]>) => {
        const totalAmountOfRecords = parseInt(
          response.headers["totalamountofrecords"],
          10
        );
        console.log(totalAmountOfRecords);

        setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
        setEntities(response.data);
      });
  }

  async function deleteEntity(id: number) {
    try {
      await axios.delete(`${props.url}/${id}`);
      loadData();
    } catch (error) {
      const err = error as AxiosError;
      if (err && err.response) {
        console.error(err.response?.data);
      }
    }
  }

  const buttons = (editUrl: string, id: number) => (
    <>
      <Link className="btn btn-success" to={editUrl}>
        Edit
      </Link>
      <Button
        className="btn btn-danger"
        onClick={() => customConfirm(() => deleteEntity(id))}
      >
        Delete
      </Button>
    </>
  );

  return (
    <>
      <h3>{props.title}</h3>
      {props.createUrl ? (
        <Link className="btn btn-primary mx-1" to={props.createUrl}>
          Create {props.entityName}
        </Link>
      ) : null}

      <Pagination
        currentPage={page}
        totalAmountOfPages={totalAmountOfPages}
        onChange={(newPage) => setPage(newPage)}
      />
      <RecordsPerPageSelect
        onChange={(amountOfRecords) => {
          setPage(1);
          setRecordsPerPage(amountOfRecords);
        }}
      />
      <GenericList list={entities}>
        <table className="table table-striped">
          {props.children(entities!, buttons)}
        </table>
      </GenericList>
    </>
  );
}

interface indexEntityProps<T> {
  url: string;
  title: string;
  createUrl?: string;
  entityName?: string;
  children(
    entities: T[],
    buttons: (editUrl: string, id: number) => ReactElement
  ): ReactElement;
}

IndexEntity.defaultProps = {};
