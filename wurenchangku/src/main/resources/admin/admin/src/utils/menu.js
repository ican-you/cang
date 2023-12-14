const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"管理员管理",
                        "menuJump":"列表",
                        "tableName":"users"
                    }
                ],
                "menu":"管理员管理"
            }
			
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "修改",
			                "删除"
			            ],
			            "menu":"员工管理",
			            "menuJump":"列表",
			            "tableName":"yonghu"
			        }
			    ],
			    "menu":"员工管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"补货提醒管理",
                        "menuJump":"列表",
                        "tableName":"buhuotixing"
                    }
                ],
                "menu":"补货提醒管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "审核",
			                "删除"
			            ],
			            "menu":"补货申请管理",
			            "menuJump":"列表",
			            "tableName":"buhuoshneqing"
			        }
			    ],
			    "menu":"补货申请管理"
			}
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
			                "审核",
                            "删除"
                        ],
                        "menu":"取货申请管理",
                        "menuJump":"列表",
                        "tableName":"quhuoshenqing"
                    }
                ],
                "menu":"取货申请管理"
            }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			                "新增",
			                "删除",
			                "修改"
			            ],
			            "menu":"物品类型管理",
			            "menuJump":"列表",
			            "tableName":"dictionaryBuhuotixing"
			        }
			    ],
			    "menu":"基础数据管理"
			}
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    },
	{
	    "backMenu":[
	        {
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "申请"
	                    ],
	                    "menu":"补货提醒管理",
	                    "menuJump":"列表",
	                    "tableName":"buhuotixing"
	                }
	            ],
	            "menu":"补货提醒管理"
	        }
			,{
			    "child":[
			        {
			            "buttons":[
			                "查看",
			            ],
			            "menu":"补货申请管理",
			            "menuJump":"列表",
			            "tableName":"buhuoshneqing"
			        }
			    ],
			    "menu":"补货申请管理"
			}
	        ,{
	            "child":[
	                {
	                    "buttons":[
	                        "查看",
	                        "新增",
	                        "修改",
	                        "删除"
	                    ],
	                    "menu":"取货申请管理",
	                    "menuJump":"列表",
	                    "tableName":"quhuoshenqing"
	                }
	            ],
	            "menu":"取货申请管理"
	        }
	    ],
	    "frontMenu":[],
	    "hasBackLogin":"是",
	    "hasBackRegister":"否",
	    "hasFrontLogin":"否",
	    "hasFrontRegister":"否",
	    "roleName":"员工",
	    "tableName":"yonghu"
	}
]
    }
}
export default menu;
