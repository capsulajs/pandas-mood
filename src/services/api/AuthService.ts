export default interface AuthServiceDefinition {
  autoLoginPopup(autoLoginPopup: AutoLoginPopupRequest): Promise<AutoLoginPopupResponse>,
  getUser(getUserRequest : GetUserRequest): Promise<GetUserResponse>
}

export interface AutoLoginPopupRequest {
}

export interface AutoLoginPopupResponse {
  msg : string,
  user? : object
}

export interface GetUserRequest {

}

export interface GetUserResponse {

}
