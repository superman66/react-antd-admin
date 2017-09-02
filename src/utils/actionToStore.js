import RequestStatus from '../constants/RequestStatus'

export function toTable(action) {
  return {
    status: action.status,
    data: action.status === RequestStatus.SUCCESS ? action.response.items : [],
    page: action.status === RequestStatus.SUCCESS ? action.response.page : {}
  }
}
