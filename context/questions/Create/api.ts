import {failed, success, throwRequest} from "./actionCreators";
import {Axios} from "../../../api/config";
import {CreateQuestionMessage} from "./message";

type Payload = {
    stack_id: string;
    title: string;
    author: string;
    content: string;
};

type response = {
    message: string
};

export const createQuestion = (stackID: string, title: string, author: string, content: string) => {
  return async (dispatch: (value: any) => void) => {
      try{
          dispatch(throwRequest());
          const payload: Payload = {
              stack_id: stackID,
              title: title,
              author: author,
              content: content
          };
          const resp = await Axios.post<response>("/question/create",payload);
          dispatch(success(CreateQuestionMessage.success))
      }catch (e) {
          dispatch(failed(CreateQuestionMessage.failed))
      }
  }
};
