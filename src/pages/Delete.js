import { useEffect } from "react";
import { setConfig } from "../utils/requestConfig";
import useHttp from "../hooks/useHttp";
import { useParams, useNavigate } from "react-router-dom";

export default function DeletePage() {
  const trainingId = useParams().trainingId;
  const navigate = useNavigate();

  const {
    requestForData: postTraining,
    isLoading: postTrainingLoading,
    isError: postTrainingError,
  } = useHttp((value) => value);

  useEffect(() => {
    console.log(trainingId);

    const deleteTraining = () => {
      postTraining(
        `${process.env.REACT_APP_API_ACCESS}/${trainingId}/delete`,
        setConfig("DELETE", {
          trainingId: trainingId,
        })
      );
    };
    deleteTraining();
    setTimeout(() => navigate("/user-trainings"), 500);
  }, []);
}
