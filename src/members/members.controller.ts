import { Body, Controller,Get,Post,Delete,Param } from '@nestjs/common';
import { MembersService } from './members.service';


@Controller('members')
export class MembersController {
    private memberService: MembersService;
    constructor(memberService: MembersService){
        this.memberService = memberService; 
    }

    @Get()
    getAllMembers(){
        return this.memberService
    }

    @Get('/:id')
    getBook(@Param('id') id:string){
        return this.memberService.getMember(id)
    }

    @Post()
    createMembers(@Body('name') name:string, @Body('email') email:string, ){
         return this.memberService.createMember(name,email);
    }

    @Post('/post')
    updateMember(
        @Body('id') id:string,
        @Body('name') name:string,
        @Body('email') email:string,
    ){
        // return this.memberService.getMember(id)
        
        return this.memberService.updateMember(id,name,email);
    }

    @Delete('/:id')
    deleteBook(@Param('id') id:string){
        return this.memberService.deleteMember(id);
    }
   
}
