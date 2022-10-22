import { Injectable,NotFoundException  } from '@nestjs/common';
import {v4 as uuidv4 } from 'uuid';
@Injectable()
export class MembersService {
    private members: any[] = [];

    getAllMember() :any[]{
        return this.members;
    }

    createMember(name:string,email:string){
        this.members.push({
            id:uuidv4()
            ,name,email
        })
    }

    updateMember(id:string,name:string,email:string){
        const MemberID = this.findMemberById(id);
        this.members[MemberID].name = name;
        this.members[MemberID].email = email;

        

    }
    getMember(id:string){
        const memberID = this.findMemberById(id);
        return this.members[memberID];
    }

    findMemberById(id:string){
        const memberID = this.members.findIndex((member) =>member.id === id);
        if(memberID === -1){
            throw new NotFoundException(`Member with id ${memberID} is not found `);
        }

        return memberID;
    }

    deleteMember(id:string){
        const MemberID = this.findMemberById(id);
        this.members.splice(MemberID,1);
    }
}
