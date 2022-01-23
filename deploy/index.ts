import * as awsx from "@pulumi/awsx";
export const backendListner = new awsx.lb.ApplicationListener("backend-loadbalance", { port: 80 });
 export const backendService = new awsx.ecs.FargateService("backend", {
    taskDefinitionArgs: {   
                             container: {  
	                                       image: 'steinko/mws-backend',
                                            portMappings: [ backendListner ]
                                         
                                       },
                           
                        },
})