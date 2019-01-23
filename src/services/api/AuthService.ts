export default interface AuthServiceDefinition {
  autoLoginPopup(autoLoginPopup: AutoLoginPopupRequest): Promise<AutoLoginPopupResponse>,

  getUser(getUserRequest: GetUserRequest): Promise<GetUserResponse>,

  status(statusRequest: StatusRequest): Promise<StatusResponse>
}

export interface AutoLoginPopupRequest {
}

export interface AutoLoginPopupResponse {
  msg: string,
  user?: object
}

export interface GetUserRequest {

}

export interface GetUserResponse {

}

export interface StatusRequest {

}

export interface StatusResponse {
  isLoggedIn: boolean
}
