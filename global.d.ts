export interface optionsInterface {
  url: string
}

export interface configInterface { 
  projectName: string, 
  methodName: string, 
  name: string, 
  title: string, 
  typeAction: any, 
  target: any 
}

export interface errInterface { 
  message: string, 
  status: any, 
  statusCode: any, 
  stack: any 
}